import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

// LLAMADA REMOTA CON DIRECCION
// async function loadTasks(){
//   const res = await fetch('http://localhost:3000/api/tasks');
//   const data = await res.json();
//   console.log(data)
// }

// LLAMADA LOCAL CON PRISMA
async function loadTasks() {
  return await prisma.task.findMany();
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const tasks = await loadTasks();
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
          ))}
        </div>
      </section>
    </>
  );
}
