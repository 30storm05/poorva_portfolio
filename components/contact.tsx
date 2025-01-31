import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold mb-12">GET IN TOUCH</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-8">Interested in working together? Let's connect.</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-400">your.email@example.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-400">City, Country</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <Input placeholder="Name" className="bg-transparent border-white/20" />
            <Input type="email" placeholder="Email" className="bg-transparent border-white/20" />
            <Textarea placeholder="Message" className="bg-transparent border-white/20" rows={6} />
            <Button className="w-full" variant="outline">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

