import { Request, Response } from "express";
import * as taskService from "../services/task.service";

export const createTask = async (
      req: Request,
      res: Response
): Promise<void> => {
      try {
            const task = await taskService.createTask(req.body);

            res.status(201).json({
                  success: true,
                  message: "Task created successfully",
                  data: task,
            });
      } catch (error) {
            res.status(500).json({
                  success: false,
                  message: "Internal Server Error",
                  error,
            });
      }
};


export const getAllTasks = async (
      req: Request,
      res: Response
): Promise<void> => {

      try {

            const tasks = await taskService.getAllTasks();
            console.log("Tasks retrieved successfully:", tasks);

            res.status(200).json({
                  success: true,
                  count: tasks.length,
                  data: tasks
            });

      } catch (error) {
            console.log(error);

            res.status(500).json({
                  success: false,
                  message: "Internal Server Error"
            });

      }

};