import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

export default class extends Controller {
  // `connect()`はStimulusのライフサイクルコールバックの1つ
  // コントローラーがHTML要素にアタッチされた時（=HTML要素が画面に表示された時）に実行される
  connect() {
    this.modal = new Modal(this.element)
    this.modal.show()
  }

  // 保存成功時にモーダルを閉じる
  close(event) {
    // event.detail.successは、レスポンスが成功ならtrueを返す
    // バリデーションエラー時はモーダルを閉じたくないので、成功時のみ閉じる
    if (event.detail.success) {
      this.modal.hide()
    }
  }
}
