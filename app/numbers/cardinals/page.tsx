"use client";
import ShowAndListComponent from '../../showomponent/page';
import { dataNumbers } from '../../../data/cardinalnumbers';
import styles from '../../showomponent/show.module.css';

export default function Cardinals( ){
      return(
            <div className="p-10 font-mulish">
                  <h2 className='font-semibold text-3xl border-b p-2 mb-10'>Números Cardinais em kimbundu</h2>
                  <div className="flex flex-col flex-wrap items-start justify-start mb-6">
                        {dataNumbers.map((number,index) => 
                              <ShowAndListComponent key={index} number={number.key} value={number.value} />
                        )}
                  </div>
                  
            </div>
      );
}
