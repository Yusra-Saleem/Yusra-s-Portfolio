"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out.",
        action: {
          label: "Close",
          onClick: () => {}
        }
      });
      
      form.reset();
    } catch (error) {
      toast.error("Failed to send message.", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-primary/5 -skew-x-12 transform-gpu"
       
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p 
                className="text-muted-foreground text-lg mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Have a project in mind or want to chat? I'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div 
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="bg-secondary/50 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                        yusrasaleem679@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                
               
                
                <div 
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="bg-secondary/50 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-secondary/20 p-6 rounded-xl border border-border/50"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3 className="font-medium mb-2">Available for:</h3>
                <ul className="space-y-2">
                  <li 
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    <span>Website Development</span>
                  </li>
                  <li 
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    <span>Freelance projects</span>
                  </li>
                  <li 
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay="800"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    <span>Consulting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border/50 shadow-lg"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 
                className="text-xl font-bold mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Send Me a Message
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;