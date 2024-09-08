import { Card } from "@/components/ui/card";
import { Nav } from "@/components/ui/Nav"

export default function Home() {
  return (
    <div className="flex flex-col p-2">
    <Nav />
      <main className="grid grid-cols-2 lg:grid-cols-3 gap-4 row-start-2 items-center sm:items-start mt-2">
        <Card className="p-2 bg-gray-100">
          <h1 className="text-2xl font-bold">Bem vindo ao meu site</h1>
          <p>
            Esse é um exemplo de um site feito com Next.js e Tailwind CSS.
          </p>
        </Card>
        <Card className="p-2 bg-gray-100">
          <h2 className="text-xl font-bold">Sobre mim</h2>
          <p>
            Meu nome é André Felipe, sou desenvolvedor web e mobile.
          </p>
        </Card>
        <Card className="p-2 bg-gray-100">
          <h2 className="text-xl font-bold">Projetos</h2>
          <p>
            Aqui você pode ver alguns dos meus projetos.
          </p>
        </Card>
        <Card className="p-2 bg-gray-100">
          <h1 className="text-2xl font-bold">Bem vindo ao meu site</h1>
          <p>
            Esse é um exemplo de um site feito com Next.js e Tailwind CSS.
          </p>
        </Card>
        <Card className="p-2 bg-gray-100">
          <h2 className="text-xl font-bold">Sobre mim</h2>
          <p>
            Meu nome é André Felipe, sou desenvolvedor web e mobile.
          </p>
        </Card>
        <Card className="p-2 bg-gray-100">
          <h2 className="text-xl font-bold">Projetos</h2>
          <p>
            Aqui você pode ver alguns dos meus projetos.
          </p>
        </Card>
      </main>
    </div>
  );
}
