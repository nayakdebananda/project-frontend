
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaGoogle, FaGithub } from 'react-icons/fa'
function IndexPage() {
  return (
    <section className="container grid h-screen content-center gap-1 pb-1 md:grid-cols-2 md:py-10 md:pt-6 ">
      <Card className="flex h-96 flex-col justify-center gap-4 p-10 lg:w-96">
        <Button className="bg-lime-200">
          <FaGoogle className="mr-1 h-4 w-4" /> Login with Google
        </Button>
        <Button className="bg-lime-200">
          <FaGithub className="mr-2 h-4 w-4" /> Login with Github
        </Button>
      </Card>
    </section>
  )
}

export default IndexPage