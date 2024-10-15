import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    period: 'month',
    features: [
      'Access to basic match predictions',
      'Limited historical data',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$19.99',
    period: 'month',
    features: [
      'Advanced AI-powered predictions',
      'Full historical data access',
      'Real-time match analytics',
      'Priority email support',
      'Access to all courses',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'year',
    features: [
      'All Pro features',
      'Custom AI model training',
      'API access for integration',
      'Dedicated account manager',
      'On-demand consulting',
    ],
  },
];

export default function Subscription() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Choose Your Subscription Plan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period !== 'Custom' && <span className="text-sm">/{plan.period}</span>}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Us' : 'Subscribe Now'}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}