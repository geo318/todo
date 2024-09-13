import TaskItem from "./TaskItem";

const tasks = [
  {
    id: 1,
    title: "Dorem ipsum dolor sit",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur adipiscing.",
    isExpanded: true,
  },
  {
    id: 2,
    title: "Dorem ipsum dolor sit",
    description: "",
    isExpanded: false,
  },
  {
    id: 3,
    title: "Dorem ipsum dolor sit",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur adipiscing.",
    isExpanded: true,
  },
];

export const TaskList: React.FC = () => {
  return (
    <div className="flex gap-2 self-stretch mt-4">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
