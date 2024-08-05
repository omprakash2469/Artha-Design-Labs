import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoList({ name, value, icon }) {
  return (
    <li className="flex items-start">
      <div>
        <FontAwesomeIcon icon={icon} className="w-4 mt-1 mr-2 text-theme-six" />
      </div>
      <div className="font-medium">
        <h5 className="text-theme-six">{name}</h5>
        <p className="text-sm text-slate-500">{value}</p>
      </div>
    </li>
  );
}
