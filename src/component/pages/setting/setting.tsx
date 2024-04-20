import { useContext, useState } from "react";
import {  Navbar } from "../../core";
import { AddCusandSup } from "../../core";
import {  UseCurrentPage } from "../../context";
// import { CustomerIcon } from "../../icon";

export default function Setting() {
  const [addPerson, setaddPerson] = useState(false);
  const currentPage = useContext(UseCurrentPage).currentPage;
  // const SelectedPerson = useContext(SelectedPersonContext)?.selectedPerson;

  return (
    <div className=" min-h-screen flex overflow-hidden">
      <Navbar  />

      {addPerson ? (
        <AddCusandSup
          setaddPerson={setaddPerson}
          type={currentPage.customer ? "customer" : "supplier"}
        />
      ) : (
        ""
      )}

      <div className=" w-[30%] max-h-screen bg-[#f3f3fc] border-r-[1.4px] border-solid border-[#a9a8a8] max-[400px]:w-[100%] max-[400px]:border-r-0">
        {/* <RenderCustomer setaddPerson={setaddPerson} /> */}

      </div>
      <div className=" w-[calc(100%-30%-200px)] max-h-screen bg-[#f3f3fc] ">
        {/* {SelectedPerson === null ? (
          <div className=" w-full h-full flex-col flex items-center justify-center">
            <CustomerIcon h={200} w={120} c="#adadad" />
            <h1 className=" text-[40px] text-[#adadad]">No Person selected</h1>
          </div>
        ) : (
          
          <Fulldeatail />
        )} */}
      </div>
    </div>
  );
}
