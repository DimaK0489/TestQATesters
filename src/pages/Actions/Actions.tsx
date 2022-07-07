import React, {useEffect, useState} from "react";
import axios from "axios";
import {ActionsType, StatusColors, StatusTypes} from "../../types/types";
import {Table} from "react-bootstrap";
import style from './Actions.module.scss';
import {Pagination} from "../../components/pagination/pagination";
import {ROUTES} from "../../routes";
import {useNavigate} from "react-router-dom";

export const Actions: React.FC = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState<ActionsType[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const paginate = (page: number) => setPage(page);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220706T100356Z&X-Amz-Expires=86400&X-Amz-Signature=faaa3dd01f492c657cdb20fdbc782d03d96d32268a5d3c7cc1cb53784933afb8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject',
      );
      setItems(result.data);
    };
    fetchData();
  }, []);

  const getStatus = (status: StatusTypes) => (
    <div className={style.status} style={{backgroundColor: StatusColors[status]}}>
      {status}
    </div>
  );

  const lastActionIndex = page * perPage;
  const firstActionIndex = lastActionIndex - perPage;
  const currentPage = items.slice(firstActionIndex, lastActionIndex)
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const renderTable = () => {
    return (
      <Table striped bordered hover>
        <thead>
        <tr className={style.header}>
          <th>Номер/Дата</th>
          <th>Тип Задания/Автор</th>
          <th>Аккаунт/Терминал</th>
          <th>Статус</th>
        </tr>
        </thead>
        <tbody className={style.tableBody}>{currentPage?.map(renderItems)}</tbody>
      </Table>
    );
  };

  const renderItems = (items: ActionsType) => {
    return (
      <tr key={items.id} onClick={() => navigate(ROUTES.infoAction)}>
        <td className={style.name}>
          # {items.id}
          <div>data {items.created_date}</div>
        </td>
        <td>
          {items.order_type.name}
        </td>
        <td>
          {items.account.name}
        </td>
        <td>{getStatus(items.status as StatusTypes)}</td>
      </tr>
    );
  };

  return (
    <div className={style.container}>
      {renderTable()}
      <Pagination page={page} prevPage={prevPage} nextPage={nextPage}
                  perPage={perPage} total={items.length} paginate={paginate}/>
    </div>
  );
}
