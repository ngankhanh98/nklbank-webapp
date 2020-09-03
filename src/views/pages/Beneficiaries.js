import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddBeneficiary, onDelBeneficiary,
  onLoadBankList, onLoadBeneficiaries,
  onUpdateBeneficiary
} from "../../actions/customerAction";
import { subsetObject } from "../../app/functions";


const _columns = [
  {
    editable: "onAdd",
    field: "beneficiary_account",
    title: "Tài khoản",
  },
  { field: "beneficiary_name", title: "Họ tên" },
  {
    editable: "onAdd",
    field: "partner_bank",
    lookup: {
      mpbank: "MPBank",
      s2qbank: "S2Q Bank",
      cryptobank: "CryptoBank",
      nklbank: "NKLBank",
    },
    title: "Ngân hàng",
  },
];

export default function Beneficiaries() {
  const [state, setState] = useState({
    columns: _columns,
    data: [],
  });

  const [nameError, setNameError] = useState({
    error: false,
    label: "",
    helperText: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onLoadBeneficiaries());
    dispatch(onLoadBankList());
  }, []);

  const { beneficiaries } = useSelector((state) => state.customerReducer);

  useEffect(() => {
    if (beneficiaries.length) {
      const _fields = Object.keys(beneficiaries[0]);
      const _data = beneficiaries.map((element) =>
        subsetObject(element, _fields)
      );

      setState({
        ...state,
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
              dispatch(onAddBeneficiary(newData));
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
