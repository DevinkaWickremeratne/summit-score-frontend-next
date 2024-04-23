import { DateTime } from "luxon";

const formatDate = (dateString: string) => {
    const date = DateTime.fromISO(dateString);
    const formattedDate = date.toFormat('yyyy LLL dd');
    return formattedDate;
  };

export default formatDate;