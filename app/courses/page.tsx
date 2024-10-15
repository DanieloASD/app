import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 1,
    title: 'Introduction to Table Tennis Betting',
    description: 'Learn the basics of table tennis betting, including understanding odds, types of bets, and basic strategies.',
    duration: '2 hours',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Advanced Statistical Analysis in Table Tennis',
    description: 'Dive deep into player statistics, performance metrics, and how to use data to inform your betting decisions.',
    duration: '4 hours',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'AI and Machine Learning in Sports Betting',
    description: 'Explore how AI and machine learning are revolutionizing sports betting, with a focus on table tennis predictions.',
    duration: '3 hours',
    level: 'Advanced',
  },
];

export default function Courses() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Betting Analysis Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.level} • {course.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}