// 单位换算模块
const UnitConverter = (() => {
	const config = {
		units: {
			resistor: ['Ω', 'KΩ', 'MΩ'],
			capacitor: ['pF', 'nF', 'μF', 'mF', 'F'],
			inductor: ['nH', 'μH', 'mH', 'H'],
			current: ['μA', 'mA', 'A'],
			voltage: ['μV', 'mV', 'V']
		},
		factors: {
			resistor: {
				'Ω': 1,
				'KΩ': 1e3,
				'MΩ': 1e6
			},
			capacitor: {
				'pF': 1,
				'nF': 1e3,
				'μF': 1e6,
				'mF': 1e9,
				'F': 1e12
			},
			inductor: {
				'nH': 1,
				'μH': 1e3,
				'mH': 1e6,
				'H': 1e9
			},
			current: {
				'μA': 1,
				'mA': 1e3,
				'A': 1e6
			},
			voltage: {
				'μV': 1,
				'mV': 1e3,
				'V': 1e6
			}
		}
	};

	// 智能数字格式化
	function formatNumber(num) {
		let formatted = Number(num)
			.toPrecision(13)
			.replace(/(\.\d*[1-9])0+([eE]|$)/g, '$1$2')
			.replace(/\.0+([eE]|$)/g, '$1')
			.replace(/\.([eE]|$)/g, '$1')
			.toLowerCase();

		if (formatted.includes('e')) {
			return formatted
				.replace(/e\+?(-?\d+)/, '×10^$1')
				.replace(/(\d)\.?×/, '$1×');
		}

		const parts = formatted.split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return parts.join('.');
	}

	function updateUnits() {
		const type = document.getElementById('componentTypeConverter').value;
		const units = config.units[type];

		[fromUnit, toUnit].forEach(select => {
			select.innerHTML = units.map(unit =>
				`<option value="${unit}">${unit}</option>`
			).join('');
		});
	}

	function convert() {
		try {
			const inputValue = parseFloat(document.getElementById('inputValue').value);
			if (isNaN(inputValue)) {
				document.getElementById('conversionResult').innerHTML = "A programmer’s favorite movie genre: documentaries about debugging.";
				return;
			}

			const type = document.getElementById('componentTypeConverter').value;
			const from = fromUnit.value;
			const to = toUnit.value;
			const result = (inputValue * config.factors[type][from]) / config.factors[type][to];

			document.getElementById('conversionResult').innerHTML = `
        <mark>计算结果:&nbsp;${formatNumber(inputValue)} ${from} = ${formatNumber(result)} ${to}</mark>
      `;
		} catch (error) {
			document.getElementById('conversionResult').innerHTML = "Why don’t programmers fish? They’re afraid of getting a ‘null’ result.";
		}
	}

	const fromUnit = document.getElementById('fromUnit');
	const toUnit = document.getElementById('toUnit');

	return {
		init: () => {
			document.getElementById('componentTypeConverter').addEventListener('change', () => {
				updateUnits();
				convert();
			});

			['inputValue', 'fromUnit', 'toUnit'].forEach(id => {
				document.getElementById(id).addEventListener('input', convert);
			});

			updateUnits();
			convert();
		}
	};
})();

// 贴片元件计算器模块
const ComponentCalculator = (() => {
	const config = {
		units: {
			resistor: 'Ω',
			capacitor: 'pF',
			inductor: 'μH'
		},
		patterns: {
			resistor: /^[\dRr]{3,4}$/i,
			capacitor: /^[\dRr]{3,4}$/i,
			inductor: /^[\dRr]{3,4}$/i
		},
		formats: {
			resistor: [{
					threshold: 1e6,
					unit: 'MΩ'
				},
				{
					threshold: 1e3,
					unit: 'KΩ'
				}
			],
			capacitor: [{
					threshold: 1e6,
					unit: 'μF'
				},
				{
					threshold: 1e3,
					unit: 'nF'
				}
			],
			inductor: [{
					threshold: 1e6,
					unit: 'H'
				},
				{
					threshold: 1e3,
					unit: 'mH'
				}
			]
		}
	};

	function getConvertedValue(value, type) {
		const formatRules = config.formats[type];
		if (!formatRules) return null;

		for (const rule of formatRules) {
			if (value >= rule.threshold) {
				return {
					value: value / rule.threshold,
					unit: rule.unit
				};
			}
		}
		return null;
	}

	function updateResult() {
		const type = document.getElementById('componentTypeCalculator').value;
		const input = document.getElementById('componentCode');
		const output = document.getElementById('componentResult');
		const rawValue = input.value.trim();
		const value = rawValue.toUpperCase();

		if (!rawValue) {
			output.innerHTML = "Life is like programming: the worst part isn’t the bugs, it’s the feature creep.";
			return;
		}

		if (!config.patterns[type].test(value)) {
			output.innerHTML = "请输入&nbsp;<mark>3&nbsp;-&nbsp;4&nbsp;</mark>位有效字符！";
			return;
		}

		try {
			const decimalIndex = value.indexOf('R');
			let result = 0;

			if (decimalIndex !== -1) {
				const [integer, decimal] = value.split(/R/i);
				result = parseFloat(`${integer}.${decimal}`);
			} else {
				const base = parseInt(value.slice(0, -1), 10);
				const exponent = parseInt(value.slice(-1), 10);
				result = base * (10 ** exponent);
			}

			// 单位转换处理
			const converted = getConvertedValue(result, type);
			let convertedText = '';
			if (converted) {
				const formattedValue = converted.value.toLocaleString(undefined, {
					maximumFractionDigits: 1
				});
				convertedText = ` = ${formattedValue} ${converted.unit}`;
			}

			output.innerHTML = `<mark>计算结果:&nbsp;${
        result.toLocaleString()}&nbsp;${config.units[type]}${convertedText}</mark>`;
		} catch (error) {
			output.innerHTML = "计算错误:&nbsp;${error.message}";
		}
	}

	return {
		init: () => {
			document.getElementById('componentCode').addEventListener('input', updateResult);
			document.getElementById('componentTypeCalculator').addEventListener('change', updateResult);
			document.getElementById('componentResult').innerHTML = "Programmers fall into two categories: who 0s and 1s, survive on Ctrl+C/V.";
		}
	};
})();

// LED计算器模块
const LEDCalculator = (() => {
	const config = {
		Vf: 2, // LED正向电压
		If: 0.02, // 正向电流(A)
		powerLevels: [0.125, 0.25, 0.5, 1, 2, 5], // 标准功率等级
		minVoltage: { // 最小工作电压
			series: (n) => n * config.Vf,
			parallel: () => config.Vf
		}
	};

	const formatResistance = (ohm) => {
		const units = [{
				threshold: 1e6,
				symbol: 'MΩ',
				divisor: 1e6
			},
			{
				threshold: 1e3,
				symbol: 'KΩ',
				divisor: 1e3
			},
			{
				threshold: 0,
				symbol: 'Ω',
				divisor: 1
			}
		];
		const unit = units.find(u => ohm >= u.threshold);
		const value = (ohm / unit.divisor).toFixed(1).replace(/\.0$/, '');
		return `${value} ${unit.symbol}`;
	};

	const calculateResistance = (type, ledCount, voltage) => {
		if (type === 'series') {
			const minV = config.minVoltage.series(ledCount);
			if (voltage <= minV) throw `电源电压必须大于&nbsp;${minV}&nbsp;V`;
			return (voltage - minV) / config.If;
		}

		const minV = config.minVoltage.parallel();
		if (voltage < minV) throw `电源电压必须大于&nbsp;${minV}&nbsp;V`;
		return (voltage - minV) / (ledCount * config.If);
	};

	const calculatePower = (type, ledCount, voltage) => {
		return type === 'series' ?
			(voltage - ledCount * config.Vf) * config.If :
			(voltage - config.Vf) * ledCount * config.If;
	};

	const getStandardPower = (power) => {
		return config.powerLevels.find(p => p >= power) || Math.ceil(power);
	};

	return {
		init: () => {
			const elements = {
				type: document.getElementById('circuitTypeCalculator'),
				ledCount: document.getElementById('ledCount'),
				voltage: document.getElementById('voltage'),
				result: document.getElementById('circuitResult')
			};
			elements.result.innerHTML = "Why do programmers prefer dark mode? Because light attracts bugs.";
			const updateHandler = () => {
				try {
					const ledCount = parseInt(elements.ledCount.value);
					const voltage = parseFloat(elements.voltage.value);

					// 输入验证
					if (isNaN(ledCount) || isNaN(voltage)) {
						elements.result.innerHTML = "请输入合理的&nbsp;LED&nbsp;数量和电压！";
						return;
					}
					if (ledCount < 1) throw "LED&nbsp;数量不能小于「<mark>1</mark>」";

					const circuitType = elements.type.value === 'concatenation' ? 'series' : 'parallel';
					const R = calculateResistance(circuitType, ledCount, voltage);
					const P = calculatePower(circuitType, ledCount, voltage);

					elements.result.innerHTML = `<mark>${elements.type.options[elements.type.selectedIndex].text}&nbsp;${ledCount}&nbsp;个&nbsp;LED&nbsp;` +
						`限流电阻&nbsp;≈&nbsp;${getStandardPower(P)}&nbsp;W&nbsp;/&nbsp;${formatResistance(Math.round(R))}<mark>`;

				} catch (error) {
					elements.result.innerHTML = error.includes('V') ? error : `✘:&nbsp;${error}`;
				}
			};

			// 事件监听
			elements.type.addEventListener('change', updateHandler);
			elements.ledCount.addEventListener('input', updateHandler);
			elements.voltage.addEventListener('input', updateHandler);
		}
	};
})();

// 初始化模块
document.addEventListener('DOMContentLoaded', () => {
	UnitConverter.init();
	ComponentCalculator.init();
	LEDCalculator.init();
});