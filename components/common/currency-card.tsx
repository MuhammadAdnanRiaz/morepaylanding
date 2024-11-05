import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CurrecnyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="flex space-x-2 items-center">
            {" "}
            <span
              className={`fi fi-${"bz"} text-2xl rounded-full border mb-1 h-8 object-fill w-auto`}
            ></span>
            <span className="text-xl">USD</span>
          </span>
        </CardTitle>
      </CardHeader>

      <CardFooter>
        <p className="font-bold text-lg">123,123</p>
      </CardFooter>
    </Card>
  );
}
