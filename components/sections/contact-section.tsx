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
    <section 
      id="contact" 
      className="py-20 bg-background relative overflow-hidden"
      aria-label="Contact information and form"
      role="region"
    >
      <div 
        className="absolute left-0 top-0 h-full w-1/3 bg-primary/5 -skew-x-12 transform-gpu"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4  items-center">
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
                  <div className="bg-secondary/50 p-3 rounded-full" aria-hidden="true">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" id="email-label">Email</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:yusrasaleem679@gmail.com" 
                        className="hover:text-primary transition-colors"
                        aria-labelledby="email-label"
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard.writeText("yusrasaleem679@gmail.com");
                          toast.success("Email copied to clipboard!");
                        }}
                      >
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
                  <div className="bg-secondary/50 p-3 rounded-full" aria-hidden="true">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1" id="location-label">Location</h3>
                    <p className="text-muted-foreground" aria-labelledby="location-label">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-secondary/20 p-6 rounded-xl border border-border/50"
                data-aos="fade-up"
                data-aos-delay="500"
                role="region"
                aria-labelledby="available-for"
              >
                <h3 className="font-medium mb-2" id="available-for">Available for:</h3>
                <ul className="space-y-2" role="list">
                  <li 
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>Website Development</span>
                  </li>
                  <li 
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>Freelance projects</span>
                  </li>
                  <li 
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay="800"
                  >
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
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
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6"
                  aria-label="Contact form"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input 
                            id="name"
                            placeholder="Your name" 
                            {...field} 
                            aria-required="true"
                            aria-invalid={!!form.formState.errors.name}
                            aria-describedby={form.formState.errors.name ? "name-error" : undefined}
                          />
                        </FormControl>
                        <FormMessage id="name-error" />
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
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input 
                            id="email"
                            type="email"
                            placeholder="Your email" 
                            {...field} 
                            aria-required="true"
                            aria-invalid={!!form.formState.errors.email}
                            aria-describedby={form.formState.errors.email ? "email-error" : undefined}
                          />
                        </FormControl>
                        <FormMessage id="email-error" />
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
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            id="message"
                            placeholder="Your message" 
                            className="min-h-[120px] resize-none" 
                            {...field} 
                            aria-required="true"
                            aria-invalid={!!form.formState.errors.message}
                            aria-describedby={form.formState.errors.message ? "message-error" : undefined}
                          />
                        </FormControl>
                        <FormMessage id="message-error" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    data-aos="fade-up"
                    data-aos-delay="500"
                    aria-label={isSubmitting ? "Sending message..." : "Send message"}
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