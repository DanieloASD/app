import MatchDetailsClient from './MatchDetailsClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

export default function MatchDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <MatchDetailsClient matchId={params.id} />
    </div>
  );
}