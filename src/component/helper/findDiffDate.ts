function getDateDifference(targetDate: string): string {
  // Parse the target date string into a Date object
  const targetDateTime: Date = new Date(targetDate);

  // Get the current date
  const now: Date = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds: number = Math.abs(
    now.getTime() - targetDateTime.getTime()
  );

  // Convert the difference into days
  const differenceInDays: number = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays === 0) {
    // Calculate the difference in hours, minutes, and seconds
    const differenceInHours: number = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60)
    );
    if (differenceInHours < 1) {
      const differenceInMinutes: number = Math.floor(
        differenceInMilliseconds / (1000 * 60)
      );
      if (differenceInMinutes < 1) {
        const differenceInSeconds: number = Math.floor(
          differenceInMilliseconds / 1000
        );
        return `${differenceInSeconds} sec`;
      } else {
        return `${differenceInMinutes} min`;
      }
    } else {
      return `${differenceInHours} hour`;
    }
  } else {
    return `${differenceInDays} days`;
  }
}
export default getDateDifference;
