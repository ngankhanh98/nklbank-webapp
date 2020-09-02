import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";

import {
  onLoadBeneficiaries,
  onUpdateBeneficiary,
  onDelBeneficiary,
} from "../../actions/customerAction";
import { fullname, accounts, bank } from "../../assets/language.json";
import { subsetObject } from "../../app/functions";

export default function Beneficiaries() {
  const [state, setState] = useState({
    columns: [],
    data: [],
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onLoadBeneficiaries());
  }, []);

  const { beneficiaries } = useSelector((state) => state.customerReducer);
  console.log("beneficiaries", beneficiaries);

  useEffect(() => {
    if (beneficiaries.length) {
      const _fields = Object.keys(beneficiaries[0]);
      const _columns = _fields
        .map((field) => {
          let title, editable;
          if (field.includes("_name")) {
            title = fullname.vi;
          }
          if (field.includes("_account")) {
            title = accounts.vi;
            editable = "onAdd";
          }
          if (field.includes("_bank")) {
            title = bank.vi;
            editable = "onAdd";
          }
          return { title, field: field, editable: editable };
        })
        .filter((field) => field.title !== undefined);
      const _data = beneficiaries.map((element) =>
        subsetObject(element, _fields)
      );
      console.log("_columns", _columns);
      console.log("_data", _data);

      setState({
        ...state,
        columns: _columns,
        data: _data,
      });
    }
  }, [beneficiaries]);

  return (
    <MaterialTable
      title="Danh sách thụ hưởng"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                console.log("data", data);
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                dispatch(onUpdateBeneficiary(oldData, newData));
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(onDelBeneficiary(oldData));
            }, 600);
          }),
      }}
    />
  );
}
