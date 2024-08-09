import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoList({ name, value, icon }) {
  return (
    <li className="flex items-start">
      <div>
        <FontAwesomeIcon icon={icon} className="w-4 mt-1 mr-2 text-theme-six" />
      </div>
      <div>
        <h5 className="text-theme-six font-medium text-lg font-poppins">
          {name}
        </h5>
        <p className="text-slate-500 xl:text-lg">{value}</p>
      </div>
    </li>
  );
}
