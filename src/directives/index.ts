import defaultImg from '@/assets/images/200.png'
import { useIntersectionObserver } from '@vueuse/core'
import { App } from 'vue'
export default {
  install(app: App) {
    app.directive('lazy', {
      // <img v-lazy="item.src" alt="" />
      // value：指令绑定的值
      mounted(el: HTMLImageElement, { value }) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            stop()
            el.src = value
            el.onerror = () => {
              el.src = defaultImg
            }
          }
        })
      },
    })
  },
}
