import { Schema, model } from "mongoose";
import { ITask } from "../interfaces/task.interface";

const taskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Task = model<ITask>("Task", taskSchema);

export default Task;