const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하'
const 힣 = '힣'.charCodeAt(0)

export default function searchByKoreanInitialSound(data, first = '') {
  const r = [...first].reduce((acc, a)=>{
    const idx = ㄱㄴㄷ.search(a)
    if (idx === -1) return a

    const S = 가나다[idx]
    const E = (가나다[idx+1]?.charCodeAt(0) || 힣 + 1) - 1
    return `${acc}[${S}-${String.fromCharCode(E)}]`
  },"")
  const regexp = new RegExp(r)
  return data.filter(d => regexp.test(d))
}
