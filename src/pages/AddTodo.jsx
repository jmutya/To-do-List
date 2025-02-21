import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const id = Math.floor(Math.random() * 10);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim() || !date.trim()) {
      alert("All fields are required!"); // Show an alert if any field is empty
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/todolist", {
        id: id.toString(),
        title,
        description,
        date,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Card className="w-[750px]">
          <CardHeader>
            <CardTitle>Add To Do</CardTitle>
            <CardDescription>Fill all fields to add to do</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col  py-10 gap-y-5 w-full">
            <div className="gap-y-2">
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="gap-y-2">
              <Label>To do Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="gap-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date" // Enables the calendar picker
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-3 py-2 border rounded-md"
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add To Do
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Back
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between">
            <h1>© All Right Reserved 2025</h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddTodo;
