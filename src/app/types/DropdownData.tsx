interface DropdownData {
  name?: string;
  handle?: any;
  type: 'root' | 'hover' | 'click' | 'item';
  children?: DropdownData[];
}

export default DropdownData;
