"use client";

import { useCallback, useState } from "react";

export default function CheckBox({ checked, onChange, ...props }) {
	const [selected, setSelected] = useState(checked);

	const handleChange = useCallback(
		(event) => {
			setSelected(event.target.checked);
			onChange(event.target.checked);
		},
		[onChange]
	);

	return (
		<input
			id="default-checkbox"
			type="checkbox"
			checked={selected}
			onChange={handleChange}
			className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			{...props}
		/>
	);
}