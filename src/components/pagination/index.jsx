import React from 'react';
import { Pagination } from 'react-bootstrap';

function ServerSidePagination({ blogs, setCurrentPage }) 
{
    return (
        <Pagination>

            {/* Previous Button */}
            <Pagination.First 
            onClick={ () => setCurrentPage(blogs?.prevPage) } 
            disabled={ blogs?.prevPage === null }
            />

            {/* Button Numbers */}
            {
                Array.from({ length:blogs?.totalPages }, (_, index) => (
                    <Pagination.Item 
                    key={ index } 
                    onClick={ () => setCurrentPage(index + 1) } 
                    active={ index + 1 == blogs?.page }
                    > 
                        { index + 1 } 
                    </Pagination.Item>
                ))
            }
            

            {/* <Pagination.Ellipsis /> */}

            {/* Next Button */}
            <Pagination.Last
            onClick={ () => setCurrentPage(blogs?.nextPage) }
            disabled={ blogs?.nextPage === null }
            />
            
        </Pagination>
    );
}

export default React.memo(ServerSidePagination);