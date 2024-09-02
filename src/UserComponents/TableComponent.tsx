import React from "react";
import NavBar from "./NavBar";

interface TableData {
  date: string;
  company: string;
  position: string;
}

const TableComponent: React.FC = () => {
  const data: TableData[] = [
    { date: "2023-09-01", company: "Tech Company", position: "Junior Software Engineer" },
    { date: "2022-08-15", company: "Another Company", position: "Software Engineer" },
    { date: "2021-07-23", company: "Startup Inc.", position: "Intern Developer" },
  ];

  return (
    <> 
      <NavBar />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-color4 dark:bg-darkBackground border border-color1 dark:border-darkColor1 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-white dark:bg-darkColor2 text-color1 dark:text-darkText uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Fecha</th>
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Compañía</th>
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Puesto</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-darkBackground text-color1 dark:text-darkText text-sm font-light">
            {data.map((item, index) => (
              <tr key={index} className="border-b border-color2 dark:border-darkColor2 hover:bg-color1 hover:text-white  dark:hover:bg-darkColor3">
                <td className="py-3 px-6 text-left whitespace-nowrap  font-montserrat">{item.date}</td>
                <td className="py-3 px-6 text-left  font-montserrat">{item.company}</td>
                <td className="py-3 px-6 text-left  font-montserrat">{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
