interface DropdownData {
  name?: string;
  handle?: any;
  type: 'root' | 'menu' | 'item';
  children?: DropdownData[];
}

export default DropdownData;
