"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import ButtonFlip from "@/components/elements/button/ButtonFlip";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

const CommentForm = () => {
  const form = useForm<z.infer<typeof formSchema> & { phone?: string }>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values)
  }

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className="section-spacing-top" ref={containerRef}>
      <InnerSectionTitle title="Write a comment" />
      <div className="mt-[23px] xl:mt-[53px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-y-[50px] gap-x-[30px] md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Subject*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Message*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ButtonFlip
              className="bg-background-2 text-text-2 !mt-[60px]"
              btnText="Submit Comment"
              type="submit"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CommentForm;
