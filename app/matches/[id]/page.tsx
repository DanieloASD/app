import { useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

// Mock data for match details
const matchDetails = {
  id: 1,
  player1: { name: 'Ma Long', winPercentage: 65, pointsWon: 1250, setsWon: 45 },
  player2: {
    name: 'Fan Zhendong',
    winPercentage: 62,
    pointsWon: 1180,
    setsWon: 42,
  },
  time: '2023-06-01 15:00',
  winProbability: 0.55,
  totalPoints: 85,
  headToHead: [
    { date: '2023-01-15', result: '3-2', winner: 'Ma Long' },
    { date: '2022-11-20', result: '3-1', winner: 'Fan Zhendong' },
    { date: '2022-09-05', result: '4-2', winner: 'Ma Long' },
  ],
};

// Add this function to generate static params
export async function generateStaticParams() {
  // In a real application, you would fetch all match IDs from your data source
  // For this example, we'll use a fixed set of IDs
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
}

export default function MatchDetails() {
  const params = useParams();
  const matchId = params.id;

  // In a real application, you would fetch the match details based on the matchId
  // For this example, we'll use the mock data

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Match Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            {matchDetails.player1.name} vs {matchDetails.player2.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Time: {matchDetails.time}</p>
          <p>
            Win Probability for {matchDetails.player1.name}:{' '}
            {(matchDetails.winProbability * 100).toFixed(2)}%
          </p>
          <p>Predicted Total Points: {matchDetails.totalPoints}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Player Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Statistic</TableHead>
                <TableHead>{matchDetails.player1.name}</TableHead>
                <TableHead>{matchDetails.player2.name}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Win Percentage</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Progress
                      value={matchDetails.player1.winPercentage}
                      className="w-[60%] mr-2"
                    />
                    {matchDetails.player1.winPercentage}%
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Progress
                      value={matchDetails.player2.winPercentage}
                      className="w-[60%] mr-2"
                    />
                    {matchDetails.player2.winPercentage}%
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Points Won</TableCell>
                <TableCell>{matchDetails.player1.pointsWon}</TableCell>
                <TableCell>{matchDetails.player2.pointsWon}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sets Won</TableCell>
                <TableCell>{matchDetails.player1.setsWon}</TableCell>
                <TableCell>{matchDetails.player2.setsWon}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Head-to-Head History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Winner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matchDetails.headToHead.map((match, index) => (
                <TableRow key={index}>
                  <TableCell>{match.date}</TableCell>
                  <TableCell>{match.result}</TableCell>
                  <TableCell>{match.winner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
