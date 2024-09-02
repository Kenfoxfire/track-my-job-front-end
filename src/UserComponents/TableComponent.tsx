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
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Fecha</th>
            <th className="py-3 px-6 text-left">Compañía</th>
            <th className="py-3 px-6 text-left">Puesto</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{item.date}</td>
              <td className="py-3 px-6 text-left">{item.company}</td>
              <td className="py-3 px-6 text-left">{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>

  );
};

export default TableComponent;
