import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function PhotosList({photos}) {
    const [lastPage, setLastPage] = useState(1);
    const [curPage, setCurPage] = useState(1);
    const [futurPage, serFuturPage] = useState();

        const photosPerPage = 50;
        const indexOfLastPhoto = curPage * photosPerPage;
        const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
        const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
    
    useEffect(()=>{
        serFuturPage(photos.length/photosPerPage)
    },[photos])

function clickUp() {
    if (curPage < futurPage) {
        setCurPage(curPage => curPage + 1)
    } else 
        return;
    }

function clickDown() {
    if (curPage > 1) {
        setCurPage(curPage => curPage - 1)
    } else 
        return;
    }

  return (
    <>
    <div className='Item'>
        <div className='PhotoNavigator'>
        <button onClick={clickDown}>{lastPage}</button>
        <p>{curPage}</p>
        <button  onClick={clickUp}>{futurPage}</button>
        </div>
        <ul className='Item_Pic'>
            {
                currentPhotos.map((photo, index)=> (
                    <li key={index}>
                        <Link to={`/Photos_page/Photo/${photo.id}`}><img src={photo.thumbnailUrl} alt={`Photo ${photo.id}`}></img></Link>
                        <p>{photo.id}</p>
                    </li>
                ))
            }
        </ul>
        <div className='PhotoNavigator'>
        <button onClick={clickDown}>{lastPage}</button>
        <p>{curPage}</p>
        <button  onClick={clickUp}>{futurPage}</button>
        </div>
    </div>
    </>
  )
}




// export default function PhotosList({ photos }) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const photosPerPage = 100; // Количество фотографий на странице
  
//     // Вычисляем индексы первой и последней фотографии на текущей странице
//     const indexOfLastPhoto = currentPage * photosPerPage;
//     const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
//     const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  
//     // Функция для изменения текущей страницы
//     const paginate = pageNumber => setCurrentPage(pageNumber);
  
//     return (
//       <div>
//         <ul>
//           {currentPhotos.map((photo, index) => (
//             <li key={index}>
//               <Link to={`/Photos_page/Photo/${photo.id}`}>
//                 <img src={photo.thumbnailUrl} alt={`Photo ${photo.id}`} />
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <Pagination
//           photosPerPage={photosPerPage}
//           totalPhotos={photos.length}
//           paginate={paginate}
//         />
//       </div>
//     );
//   }
  


// const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
//     const pageNumbers = [];
  
//     for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
//       pageNumbers.push(i);
//       console.log(pageNumbers)
//     }
  
//     return (
//       <nav>
//         <ul className='pagination'>
//           {pageNumbers.map(number => (
//             <li key={number} className='page-item'>
//               <button onClick={() => paginate(number)} className='page-link'>
//                 {number}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };

