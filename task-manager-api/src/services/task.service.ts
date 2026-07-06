import Task from "../models/task.model";
import { ITask } from "../interfaces/task.interface";

export const createTask = async (
      taskData: ITask
): Promise<ITask> => {

      const task = await Task.create(taskData);

      return task;
};


export const getAllTasks = async () => {
      return await Task.find();
};

