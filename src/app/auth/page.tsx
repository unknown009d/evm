// "use client"
// import {
//     InputOTP,
//     InputOTPGroup,
//     InputOTPSeparator,
//     InputOTPSlot,
// } from "@/components/ui/input-otp"
// import { Button } from "@/components/ui/button"

// export default function Auth() {
//     return (
//         <div className="flex flex-col justify-center items-center gap-10">
//             <h2 className="">Enter the otp for verification</h2>
//             <InputOTP
//                 maxLength={6}
//                 render={({ slots }) => (
//                     <>
//                         <InputOTPGroup>
//                             {slots.slice(0, 3).map((slot, index) => (
//                                 <InputOTPSlot key={index} {...slot} />
//                             ))}{" "}
//                         </InputOTPGroup>
//                         <InputOTPSeparator />
//                         <InputOTPGroup>
//                             {slots.slice(3).map((slot, index) => (
//                                 <InputOTPSlot key={index} {...slot} />
//                             ))}
//                         </InputOTPGroup>
//                     </>
//                 )}
//             />
//             <Button className="">Verify the otp</Button>
//         </div>
//     )
// }

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export default function Auth() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  render={({ slots }) => (
                    <InputOTPGroup>
                      {slots.map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} />
                      ))}{" "}
                    </InputOTPGroup>
                  )}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
