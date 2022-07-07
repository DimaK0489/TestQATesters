import React from "react";
import {Form} from "react-bootstrap";
import style from './pagination.module.scss';

interface Props {
  page: number
  perPage: number,
  total: number,
  paginate: (number: number) => void,
  nextPage: () => void,
  prevPage: () => void,
  onChangePage?: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}

export const limitOptions = [
  {
    name: "5",
    value: 5,
  },
  {
    name: "10",
    value: 10,
  },
  {
    name: "20",
    value: 20,
  },
];

export const Pagination = ({perPage, total, paginate, prevPage, nextPage, page, onChangePage}: Props) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div className={style.container}>
      <button disabled={page <= 1} className={style.button} onClick={prevPage}>Prev</button>
      {pageNumber.map(number => (
        <button className={number === page ? style.active : style.total} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
      <button disabled={page >= total} className={style.button} onClick={nextPage}>Next</button>
      <Form.Select onChange={onChangePage}>
        {limitOptions?.map((option) => (
          <option key={option.name} value={option.value ?? option.name}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
