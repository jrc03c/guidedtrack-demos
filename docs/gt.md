<style>
  * {
    font-family: monospace;
  }

  body {
    color: rgb(74, 74, 74);
    max-width: calc(768px - 3em);
    margin: 3em auto;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 1.5em 0;
  }

  h1, h2, h3, h4, h5, h6, b, strong {
    color: black;
  }

  hr {
    padding: 0 !important;
    margin: 3em 0 !important;
    height: 4px;
  }

  .danger {
    color: red;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    body {
      max-width: calc(100% - 3em);
      margin: 3em 1.5em;
    }
  }
</style>

# GuidedTrack Docs

<hr>

## All

**text**<br>
converts a variable to text

**type**<br>
returns the type of a variable

<hr>

## Arrays (Collections)

<p class="danger">
  NOTE: Remember that GT arrays are 1-indexed!
</p>

**add(elementToAdd)**<br>
adds elementToAdd at the end of a collection

**combine(collectionToAdd)**<br>
adds the elements of collectionToAdd at the end of a given collection

**count(valueToCount)**<br>
returns the number of times that valueToCount appears in a given collection

**erase(value)**<br>
removes all elements of a collection that match a given value

**find(valueToFind)**<br>
returns the first index in which the valueToFind appears in a given collection

**insert(elementToAdd, position)**<br>
inserts elementToAdd at a given position of a collection

**max**<br>
returns the maximum value in a collection of numbers

**mean**<br>
returns the mean value of a collection of numbers

**median**<br>
returns the median value of a collection of numbers

**min**<br>
returns the minimum value in a collection of numbers

**remove(position)**<br>
removes the element at a given position of a collection

**shuffle**<br>
shuffles the elements in a collection

**size**<br>
returns the number of elements in a collection

**sort("increasing" / "decreasing")**<br>
sorts a collection increasingly or decreasingly

**unique**<br>
removes duplicate elements in a collection

<hr>

## Datetimes

**to("time_unit")**<br>
converts a time duration variable into a different time unit; valid time units are:

- seconds
- minutes
- hours
- days
- weeks
- months
- years

<hr>

## Dictionaries (Associations)

**erase(value)**<br>
removes all elements in an association whose value matches a given one

**keys**<br>
returns a collection with the keys of an association

**remove(key)**<br>
removes a key and its associated value from an association

<hr>

## Numbers

**round**<br>
rounds a number to the nearest integer

**round(numberOfDecimals)**<br>
rounds a number to the given number of decimals

<hr>

## Strings (Text)

**clean**<br>
removes whitespace at the beginning and end of a text

**count(textToCount)**<br>
returns the number of times that textToCount appears in a given text

**decode("URL")**<br>
undoes an URL encoding by replacing the ‘%’-based ‘escape sequence’ of characters with their normal representation

**encode("URL")**<br>
replaces unsafe ASCII characters with a “%” followed by two hexadecimal digits to create valid URLs

**find(textToFind)**<br>
returns the first position in which textToFind appears in a given text

**lowercase**<br>
converts text to lowercase

**size**<br>
returns the number of characters in a text

**split(delimiterText)**<br>
splits a text using delimiterText and stores the output in a collection

**uppercase**<br>
converts text to uppercase

<hr>
