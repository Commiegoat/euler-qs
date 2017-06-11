def questionOne
	number = 0
	sum = 0

	while number < 1000
		if number % 3 == 0 or number % 5 == 0
			sum = sum + number
		end
		number = number + 1		
	end

	puts sum
end

def questionTwo
	fib1 = 1
	fib2 = 0
	sum = 0

	while fib1 < 4000000
		x = fib1 + fib2
		fib2 = fib1
		fib1 = x
		if fib1 % 2 == 0
			sum = sum + fib1
		end
	end
	puts sum
end

def questionThree
	num = 600851475143
	prime = 2
	array = []

	while prime < 100000
		if num % prime == 0
			if array.empty?
				array.push(prime)
			elsif (array.inject { |product, x| product * x }) * prime <= num
				array.push(prime)
			end
		end
		prime += 1
	end

	puts "largest prime factor of #{num} is #{array.at(-1)}"
end



questionOne
questionTwo
questionThree
