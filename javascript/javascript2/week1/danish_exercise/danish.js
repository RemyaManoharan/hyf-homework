const danishString = "Jeg har eøæn blå bil";
function getDanish(str) {
 let m = str.match(/[æøå]/gi);
   const count = (m === null) ? 0 : m.length;
    let a =str.match(/[æ]/gi);
    const count1 = (a === null) ? 0 : a.length;
   let b = str.match(/[ø]/gi);
   const count2 = (b === null) ? 0 : b.length;
   let c = str.match(/[å]/gi);
 
   const count3 = (c === null) ? 0 : c.length;
   return {'total' : count,
   'æ':count1,
   'ø':count2,
   'å':count3
}
  }
 const obj= getDanish(danishString) 
 console.log(obj);