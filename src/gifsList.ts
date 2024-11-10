// Full list of GIF URLs
const fullGifUrls: string[] = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVtZDZkcmloaXl1aHNld3poMmE0dW5zMGw0ODExeHh4YzhtZzhkZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/NIhKMK658L9MUdaLrn/giphy.gif", // some guy laughing
    "https://media.giphy.com/media/ikz7ltD7jh7xJ5KffG/giphy.gif?cid=790b761195hqwrijzorb1h3b8navn9g17s1gm54vkkf4zdqz&ep=v1_gifs_search&rid=giphy.gif&ct=g", // cat goes in pokeball
    "https://media.giphy.com/media/OT5e8Thl1aqd8t2yWa/giphy.gif?cid=ecf05e471re7g04ublldkeb4a05eaorp00m2qdig8bjuf54g&ep=v1_gifs_search&rid=giphy.gif&ct=g", // amongus 
    "https://media.giphy.com/media/k0iqom6EJbgnOnzuwr/giphy.gif?cid=790b7611ufrcc0w4t0uz6679973zzuk28v81iar17e4qf2j7&ep=v1_gifs_search&rid=giphy.gif&ct=g", // skibidi toilet
    "https://media.giphy.com/media/UTemva5AkBntdGyAPM/giphy.gif?cid=790b7611dcldd9w8xtcwwowt1wvlm22w5g7ip6lcfree295j&ep=v1_gifs_search&rid=giphy.gif&ct=g", // subway surfers
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzdub2Y1OWgwMGFud203dzA1MjBtcTR6eWRqbjIzeDg2Y2RzbDRxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nR4L10XlJcSeQ/giphy.gif", // cat shaking head no 
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnIyc3FvN2g4aGo4cTVpYWZycjNkcTd5em01N2VncHcza2hyOTNoYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zKRlxWqdP4NTok3Ppl/giphy.gif", // goku
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnIyc3FvN2g4aGo4cTVpYWZycjNkcTd5em01N2VncHcza2hyOTNoYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zKRlxWqdP4NTok3Ppl/giphy.gif", // old man hula hoop onion ring
    "https://tenor.com/view/deep-fried-gif-27146636", // deep fried do not
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHU5d3JkYzBscHhtbWk2cGVmMnYyczNpYTNxenV4c2g1cHZqbXAzOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CAYVZA5NRb529kKQUc/giphy.gif", // gigachad guy
    "https://media.giphy.com/media/F0st07VOJ5fpjVZHJ5/giphy.gif?cid=790b76118u9wrdc0lpxmmi6pef2v2s3ia3qzuxsh5pvjmp39&ep=v1_gifs_search&rid=giphy.gif&ct=g", // buff penguin
    "https://www.icegif.com/wp-content/uploads/2024/06/mewing-icegif-2.gif", // cat mewing
    "https://media1.tenor.com/m/zaPJAjGLfQ4AAAAd/help-me-gedagedi.gif", // help me zombie teaching chicken nuggets
    "https://media.giphy.com/media/UvOcKPHrkKSLm/giphy.gif?cid=790b7611rnjkzurci6lgni1o2h9mw98mta9co9i9ckch5a41&ep=v1_gifs_search&rid=giphy.gif&ct=g", // spongebob licking the air 
    "https://media.giphy.com/media/PkLPBuyozY7F31wCxF/giphy.gif?cid=ecf05e47ckzes80fbd6c25t1nfn4f64d3itqispf0qn3fpua&ep=v1_gifs_search&rid=giphy.gif&ct=g", // ight imma head out
    "https://media.giphy.com/media/l0IybQ6l8nfKjxQv6/giphy.gif?cid=82a1493bes2rrczos4xowayku8gyyk3p2rtigcvsbhtv9ql6&ep=v1_gifs_trending&rid=giphy.gif&ct=g", // squirrel 
    "https://media.giphy.com/media/MUHNdrm3vk7MoyUsCO/giphy.gif?cid=82a1493baf55kkozqzj78s1y36f69gpnlt00h4yr3wvzo0yp&ep=v1_gifs_trending&rid=giphy.gif&ct=g", // jumping bird
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjJoOGJ2MXJleDV2dmdjcjJ2MXN6cHVvNjAzd3BubW0xZTJ5MnB1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qiMbLh4WHEZyw/giphy.gif", // laughing cat
    "https://media.giphy.com/media/sJWNLTclcvVmw/giphy.gif?cid=82a1493brymd10iynxxip2nup608qy434zogvfcwf9z1b3x2&ep=v1_gifs_trending&rid=giphy.gif&ct=g", // weird ahh sloth
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmN2dThhOXo0Ym1xd2ZlZGZscGlrMGI0ZmwyMWdydHZheHlsenVnYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2wSblJnaFakthn0BM1/giphy.gif", // #1 victory royale
    "https://media.giphy.com/media/3kzrzzQXUfI6bmUNf3/giphy.gif?cid=790b7611bcvu8a9z4bmqwfedflpik0b4fl21grtvaxylzuga&ep=v1_gifs_search&rid=giphy.gif&ct=g", // orange justice
    "https://media.giphy.com/media/50Job17dRKjIUrWeKe/giphy.gif?cid=82a1493btjniyavbji5i115uvt74i8eedgunnfs8zv7eojxu&ep=v1_gifs_trending&rid=giphy.gif&ct=g", // weird sad bug
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDhpZm84eXN2cmN5dDBvdzJwdTBqbHR5cXc0eTQyMW1vcGFvanVmbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UO5elnTqo4vSg/giphy.gif", // shaq
    "https://media.giphy.com/media/TT7JW4Qm7uaNW/giphy.gif?cid=790b7611y5gd7droktq85ym806h1etcwywoic8t0ln6wla4a&ep=v1_gifs_search&rid=giphy.gif&ct=g", // the rock
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5ZzdkaWtybWVid3p4eTduN3EzeXh6OWVmcmhldnVqamViYzJpYyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/3NtY188QaxDdC/giphy.gif", // zootopia sloth 
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm04djcxa29xaGNoem5wcjRuOHI0cDRwcndid3p1Znp1MDAwbjRkNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/izSdnrEWNpSne/giphy.gif", // spinning 3d model duck 
    "https://media.giphy.com/media/MvOTI6xRNitLa/giphy.gif?cid=ecf05e470u2gvh27arxtov0a7kmooo8lvjuwlmmkd2mb305x&ep=v1_gifs_search&rid=giphy.gif&ct=g", // top hat duck 
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd245cG0zMGtneDVvZHZuenY2ZHQyYmE4cHQ2dmZucHN3ZG9jMGc0YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gKHGnB1ml0moQdjhEJ/giphy.gif", // brown dog
    "https://media.giphy.com/media/gFW9rRpOkMRBY2KF6s/giphy.gif?cid=790b7611wn9pm30kgx5odvnzv6dt2ba8pt6vfnpswdoc0g4c&ep=v1_gifs_search&rid=giphy.gif&ct=g", // chihuahua on 2 legs
    "https://media.giphy.com/media/8H80IVPjAdKY8/giphy.gif?cid=ecf05e471p9eueq0vtq4ggietyw32lty4tp62e012ycs5ddu&ep=v1_gifs_search&rid=giphy.gif&ct=g", // someone holding dogs tongue
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajl3ZnhsZmI1ZWFzdTBoanBneDNuZnlzeG1rOGVteWJpNnE2bjJvbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jUwpNzg9IcyrK/giphy.gif", // scared homer
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajl3ZnhsZmI1ZWFzdTBoanBneDNuZnlzeG1rOGVteWJpNnE2bjJvbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9sSrddsom3yb6/giphy.gif", // tongue shaking homer
    "https://media.giphy.com/media/ToMjGpmMPnS1FBUDce4/giphy.gif?cid=790b7611pjkdg9sis0lhfokxlb1i6puazzn3m8rswqprkidq&ep=v1_gifs_search&rid=giphy.gif&ct=g", // spinning manatee
    "https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif?cid=790b7611pjkdg9sis0lhfokxlb1i6puazzn3m8rswqprkidq&ep=v1_gifs_search&rid=giphy.gif&ct=g", // spongebob rainbow
    "https://media.giphy.com/media/13w5HmyiuaZ224/giphy.gif?cid=ecf05e47jrujt4brwa03syo35pbx5hz4jxqpjl541l85nkvw&ep=v1_gifs_search&rid=giphy.gif&ct=g", // peter griffin
    "https://media.giphy.com/media/fUYhyT9IjftxrxJXcE/giphy.gif?cid=ecf05e47jrujt4brwa03syo35pbx5hz4jxqpjl541l85nkvw&ep=v1_gifs_search&rid=giphy.gif&ct=g", // tom and jerry jerry
    "https://media.giphy.com/media/cFdHXXm5GhJsc/giphy.gif?cid=ecf05e47zrznhs615ajg29qo3kvx3in4uafwgdaha01v1i65&ep=v1_gifs_search&rid=giphy.gif&ct=g", // tmnt
    "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif?cid=ecf05e47v4s1yf31l5w7rjikbn9d2itilop275hihxk27v0v&ep=v1_gifs_search&rid=giphy.gif&ct=g", // adventure time 
    "https://media.giphy.com/media/7eAvzJ0SBBzHy/giphy.gif?cid=ecf05e479mxz36el99mdmh3z2p9i7t61e3f4upvz0g8uzos1&ep=v1_gifs_search&rid=giphy.gif&ct=g", // stewie
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNsajB4ZDF0Y29yMm44cHgyNDg2czFkOXR4MWw5MGEwMnNjMmNuZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BT0rUpCcIaiEbjmsTc/giphy.gif", // bing bong
    "https://media.giphy.com/media/RhwspoVbfRj0tvMCap/giphy.gif?cid=790b7611ynasrm3kgjxhg7tkhye53v2wy5bzkmgpdr1f05hm&ep=v1_gifs_search&rid=giphy.gif&ct=g", // +100 aura
    "https://media.giphy.com/media/l3HBbltOYjoNq/giphy.gif?cid=790b7611eb87npjnxpbv12lezc312xl09igt1vxpnlm95lhe&ep=v1_gifs_search&rid=giphy.gif&ct=g", // minion
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHBwcG9yNDBtY2FvYmZkdjI3djZkaDA3OXlqcnVydGphOGk0aG9yZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohze14wEeU6WpOomc/giphy.gif", // lobotomy wtv this is 
    "https://media.giphy.com/media/8ScUr3sVe6SeDynLWJ/giphy.gif?cid=790b7611hpppor40mcaobfdv27v6dh079yjrurtja8i4hord&ep=v1_gifs_search&rid=giphy.gif&ct=g", // this is me btw if u even care
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmd6a3Y4eWk4ZXVjbXJqa2lscGh3MGN0NTNucXJkeDA3OXNvOXIxaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/U2nN0ridM4lXy/giphy.gif", // pikachue off a perc
    "https://media.giphy.com/media/u2yT9ZziHq5IfnyVAK/giphy.gif?cid=790b7611bgzkv8yi8eucmrjkilphw0ct53nqrdx079so9r1j&ep=v1_gifs_search&rid=giphy.gif&ct=g", // smoliv
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2JzZmp3NGk1bWpqbXJtbXQyYTFicmFsYXJ3cHo1YmVoeGF4aXRuNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l36kU80xPf0ojG0Erg/giphy.gif", // spiderman
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFmNTM4cGZtcnVuYTd6MXY4cjN3MW4wemd2eWY2MjVrZzZ0eWFvayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KFhv3T1seYSJuak8TN/giphy.gif", // tom nook
    "https://media.giphy.com/media/GJRU9kspJtED9Hp28N/giphy.gif?cid=ecf05e4749mbt5uq4ivtslubcyu0lvsae5tszhq10xoqiaxg&ep=v1_gifs_search&rid=giphy.gif&ct=g", // spiderman shooting webs cartoon bad
    "https://media.giphy.com/media/lEc7pLgBpipbi/giphy.gif?cid=ecf05e47ac5ob3jnd7cjmjtijfnlpcgybxgeu0b48eg0ikbp&ep=v1_gifs_search&rid=giphy.gif&ct=g" // ash and charmander laughing
  ];

// Function to shuffle an array randomly
const shuffleArray = (array: string[]): string[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };
  
  // Select 6 random GIFs
  const selectRandomGifs = (fullGifUrls: string[]): string[] => {
    // Shuffle the array and slice the first 6 items
    const shuffled = shuffleArray([...fullGifUrls]);
    return shuffled.slice(0, 8);
  };

// Export randomized selection of GIFs
export const selectedGifUrls: string[] = selectRandomGifs(fullGifUrls); // Randomized selection of 6 GIFs
  