import CardItem from './CardItem';
import { PolicySummary } from '../../types'


const policies: PolicySummary[] = [
    {
        id: 1,
        type: "HEALTH",
        name: "Health Insurance",
        description: "Going public or private? We help you choose your best option for your situation.", 
    },
    {
        id: 2,
        type: "LIABILITY",
        name: "Personal Liability",
        description: "For when you damage someone else's property or assets. Partially required by law.",
    },
    {
        id: 3,
        type: "HOUSEHOLD",
        name: "Household Contents",
        description: "Protection for your household possessions. Often required by landlords.",
    }
]

const CardList = () => {
  return (
    <div className='flex justify-around flex-wrap w-full md:w-10/12 mx-auto' data-testid='card-list-container'>
        {policies.map((policy) => <CardItem policy={policy} key={policy.id} />)}
    </div>
  );
};

export default CardList;
