import { useSearchParams } from 'react-router-dom';
import { PaginationProps } from '../../types';

enum Action {
  NEXT = 'NEXT',
  PREV = 'PREV',
}

const Pagination = ({ policiesLength, handleAPICall }: PaginationProps) => {
  const [searchParams] = useSearchParams();
  const offset = searchParams.get('offset');

  const handlePagination = async (action: Action) => {
    let skip: number;

    if (action === 'NEXT') {
      skip = offset ? +offset + 10 : 10;
    } else {
      skip = offset ? +offset - 10 : 0;
    }

    handleAPICall({ offset: `${skip}` })
  };

  return (
    <div className='flex justify-between items-center my-2 float-right'>
      <div className='flex justify-between'>
        <button
          className='text-white-100 bg-purple-200 py-2 px-4 mr-4 rounded-sm disabled:cursor-not-allowed'
          onClick={() => {
            handlePagination(Action.PREV);
          }}
        >
          &#8592;
        </button>
        <button
          className='text-white-100 bg-purple-200 py-2 px-4 rounded-sm disabled:cursor-not-allowed'
          onClick={() => {
            handlePagination(Action.NEXT);
          }}
          disabled={policiesLength < 10}
          data-testid='pagination-next-button'
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
