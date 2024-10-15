"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Mock data for upcoming matches
const upcomingMatches = [
  { id: 1, player1: 'Ma Long', player2: 'Fan Zhendong', time: '2023-06-01 15:00', winProbability: 0.55, totalPoints: 85 },
  { id: 2, player1: 'Timo Boll', player2: 'Dimitrij Ovtcharov', time: '2023-06-01 16:30', winProbability: 0.48, totalPoints: 82 },
  { id: 3, player1: 'Mima Ito', player2: 'Chen Meng', time: '2023-06-01 18:00', winProbability: 0.52, totalPoints: 87 },
  { id: 4, player1: 'Hugo Calderano', player2: 'Lin Yun-Ju', time: '2023-06-02 14:00', winProbability: 0.51, totalPoints: 83 },
  { id: 5, player1: 'Tomokazu Harimoto', player2: 'Liang Jingkun', time: '2023-06-02 15:30', winProbability: 0.53, totalPoints: 86 },
];

export default function Matches() {
  const router = useRouter();

  const handleViewDetails = (matchId: number) => {
    router.push(`/matches/${matchId}`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Upcoming Matches</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Players</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Win Probability</TableHead>
            <TableHead>Predicted Total Points</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {upcomingMatches.map((match) => (
            <TableRow key={match.id}>
              <TableCell>{match.player1} vs {match.player2}</TableCell>
              <TableCell>{match.time}</TableCell>
              <TableCell>{(match.winProbability * 100).toFixed(2)}%</TableCell>
              <TableCell>{match.totalPoints}</TableCell>
              <TableCell>
                <Button onClick={() => handleViewDetails(match.id)}>View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}