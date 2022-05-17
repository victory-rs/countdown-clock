export const zero = `*******
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*******`;
export const one = `      *
      *
      *
      *
      *
      *
      *
      *
      *
      *
      *
      *`;
export const two = `*******
      *
      *
      *
      *
      *
*******
*
*
*
*
*******`;
export const three = `*******
      *
      *
      *
      *
*******
      *
      *
      *
      *
      *
*******`;
export const four = `*     *
*     *
*     *
*     *
*     *
*     *
*******
      *
      *
      *
      *
      *`;
export const five = `*******
*
*
*
*
*******
      *
      *
      *
      *
      *
*******`;
export const six = `*******
*
*
*
*
*******
*     *
*     *
*     *
*     *
*     *
*******`;
export const seven = `*******
      *
      *
      *
      *
      *
      *
      *
      *
      *
      *
      *`;
export const eight = `*******
*     *
*     *
*     *
*     *
*     *
*******
*     *
*     *
*     *
*     *
*******`;
export const nine = `*******
*     *
*     *
*     *
*     *
*     *
*******
      *
      *
      *
      *
*******`;
export const v = `*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
 *   *
  * *
   *   `;
export const i = `*****
  *
  *
  *
  *
  *
  *
  *
  *
  *
  *
*****`;
export const c = ` ***
*   *
*
*
*
*
*
*
*
*
*   *
 ***  `;
export const t = `*****
  *
  *
  *
  *
  *
  *
  *
  *
  *
  *
  *   `;

export const o = ` *****
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
*     *
 ***** `;

export const r = ` *****
 *    *
 *    *
 *    *
 *    *
 *****
 *    *
 *    *
 *    *
 *    *
 *    *
 *    * `;
export const y = `*     *
*     *
*     *
*     *
 *   *
  * *
   *
   *
   *
   *
   *
   *   `;
const space = Array(12)
  .fill(Array(7).fill(" "))
  .map((r) => r.join(""))
  .join("\n");

const colon = `       
       
       
  *   
      
      
      
      
  *   
      
      
      `;
export const dot = `       
       
       
       
       
       
       
       
       
       
       
*    `;
export const s = ` ****  
*    * 
*      
*      
*      
 ****  
     * 
     * 
     * 
     * 
*    * 
 ****  `;
export const letters = {
  v,
  i,
  c,
  t,
  o,
  r,
  y,
  s,
  "0": zero,
  "1": one,
  "2": two,
  "3": three,
  "4": four,
  "5": five,
  "6": six,
  "7": seven,
  "8": eight,
  "9": nine,
  " ": space,
  ":": colon,
  ".": dot,
};
export const widths = {
  v: 9,
  i: 7,
  c: 6,
  t: 7,
  o: 8,
  r: 8,
  y: 8,
  s: 7,
  "0": 8,
  "1": 8,
  "2": 8,
  "3": 8,
  "4": 8,
  "5": 8,
  "6": 8,
  "7": 8,
  "8": 8,
  "9": 8,
  " ": 8,
  ":": 3,
  ".": 3,
};
