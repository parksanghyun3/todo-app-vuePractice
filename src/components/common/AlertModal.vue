<template>
	<div>
		<transition name="AlertModal">
			<div class="AlertModal-mask">
				<div class="AlertModal-wrapper">
					<div class="AlertModal-container">

						<div class="AlertModal-header">
							<slot name="header">
								default header
							</slot>
						</div>

						<div class="AlertModal-body">
							<slot name="body">
								default body
							</slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.AlertModal-mask {position: fixed; z-index: 9998; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: table; transition: opacity 0.3s ease;
}

.AlertModal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.AlertModal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.AlertModal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.AlertModal-body {
  margin: 20px 0;
}

.AlertModal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="AlertModal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the AlertModal transition by editing
 * these styles.
 */

.AlertModal-enter {
  opacity: 0;
}

.AlertModal-leave-active {
  opacity: 0;
}

.AlertModal-enter .AlertModal-container,
.AlertModal-leave-active .AlertModal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>