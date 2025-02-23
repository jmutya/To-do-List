import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Todo = () => {
  const [todo, setTodo] = useState({ title: "", description: "", date: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todolist/${id}`
        );
        setTodo(response.data);
        setUpdatedTodo({
          title: response.data.title,
          description: response.data.description,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodo();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/todolist/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/todolist/${id}`, updatedTodo);
      setTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Card className="w-[750px]">
          <CardHeader>
            <CardTitle className="flex justify-between">
              {isEditing ? (
                <input
                  type="text"
                  value={updatedTodo.title}
                  onChange={(e) =>
                    setUpdatedTodo({ ...updatedTodo, title: e.target.value })
                  }
                  className="border px-2 py-1"
                />
              ) : (
                <h1>{todo.title}</h1>
              )}
              <div>
                {isEditing ? (
                  <Button onClick={handleUpdate} className="mr-2">
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => setIsEditing(true)} className="mr-2">
                    Edit
                  </Button>
                )}
                <Button onClick={handleDelete} variant="destructive">
                  Delete
                </Button>
              </div>
            </CardTitle>

            <CardDescription>{todo.date}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-10">
            {isEditing ? (
              <textarea
                value={updatedTodo.description}
                onChange={(e) =>
                  setUpdatedTodo({
                    ...updatedTodo,
                    description: e.target.value,
                  })
                }
                className="border px-2 py-1 w-full"
              />
            ) : (
              <p>{todo.description}</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={() => navigate("/")}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </Button>
            <h1>© All Right Reserved 2025</h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Todo;
