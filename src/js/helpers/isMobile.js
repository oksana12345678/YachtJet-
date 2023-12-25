// export const isMobile = () => {
//   const mobileRegex =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
//   return mobileRegex.test(navigator.userAgent);
//   return window.innerWidth < 768;
// };

export const isMobile = () => {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};

// if (isMobile()) {
//   console.log('Mobile device detected');
// } else {
//   console.log('Desktop device detected');
// }
