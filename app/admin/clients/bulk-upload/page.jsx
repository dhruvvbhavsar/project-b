/* eslint-disable react/jsx-key */
"use client";
import React, { useState, useEffect } from "react";
import AdminSidebar from "../../adminSidebar";
import Select from "react-select";
import { read, utils } from "xlsx";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function Bulk() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState("");
  const [file, setFile] = useState();
  const [tableData, setTableData] = useState();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    // Fetch the list of clients from the API
    const fetchClients = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/bulk/clients`
        );
        const data = await response.json();

        // Map the API data to the desired format
        const formattedClients = data[0]["data"].map((client) => ({
          value: client._id,
          label: `${client.name} (${client.number})`,
        }));

        // Update the state with the formatted clients
        setClients(formattedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  function handleDownload() {
    const fileName = "upload-format.xlsx";
    const fileUrl = `${fileName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }

  async function handleUpload() {
    setLoading(true);
    const f = await file.arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    const obj = {
      clientId: client,
      cards: data,
    };
    console.log(obj);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/bulk/upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    const res = await response.json();
    if(response.ok) {
      setLoading(false)
    }
    setTableData(res[0]["data"]);
    console.log(res);
  }
  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <AdminSidebar />

        <div className="w-full min-h-screen ">
          <div className="text-white mt-[70px] px-4 sm:px-10 mb-4">
            <h1 className="text-[22px]">Hello, Admin!</h1>
            <p className="mt-4 text-lg text-[#ba44c5] flex gap-2 items-center">
              {/* <ArrowLeft className="text-white" /> */}
              Bulk Upload
            </p>
            <div className="mt-12">
              <p>Choose Client name</p>
              <Select
                className="text-black"
                defaultValue={clients[0]}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="client"
                options={clients}
                onChange={(opt) => {
                  console.log(opt.label, opt.value);
                  setClient(opt.value);
                  console.log(client);
                }}
              />
            </div>
            <div className="mt-8 flex gap-8">
              <Button className="">
                <input
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={handleFileChange}
                  placeholder="Upload the file here"
                />
              </Button>
              <Button onClick={handleDownload}>Download Upload Format</Button>
            </div>
            <Button onClick={handleUpload} className="mt-8">
              Upload
            </Button>
          </div>
          {tableData ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Url</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((cell, index) => (
                  <TableRow className="text-white">
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{cell["platform"]}</TableCell>
                    <TableCell>{cell["activity"]}</TableCell>
                    <TableCell>{cell["type"]}</TableCell>
                    <TableCell>{cell["goal"]}</TableCell>
                    <TableCell>₹{cell["budget"]}</TableCell>
                    <TableCell>
                      <Link href={cell["taskUrl"]} target="_blank">
                        <Eye className="text-blue-600 hover:text-blue-200 scale-75" />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            ""
          )}
          {loading ? <p className="text-white mx-auto">Loading...</p> : ""}
        </div>
      </main>
    </>
  );
}
