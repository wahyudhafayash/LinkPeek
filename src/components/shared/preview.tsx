import { DataType } from "../../App";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Preview = ({ title, description, image }: DataType) => (
  <Card className="pt-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>

    <CardContent>
      <img src={image} alt={title} />
    </CardContent>
  </Card>
);
